function ArrayPro() {
    this._isLocked = false;
    this._operation = '';
    this._callback = null;
    this.callbaks = {};
    this._hasCallBack = function(currentOperation) {
        return this._callback && (this._operation === '*' || this._operation === currentOperation);
    }
}

ArrayPro.prototype = Object.create(Array.prototype);

ArrayPro.prototype.lock = function() {
    this._isLocked = true;
};

ArrayPro.prototype.unlock = function() {
    this._isLocked = false;
};

ArrayPro.prototype.addCallBack = function(operation, callback) {
    //this.callbacks[operation] = callback;
    this._operation = operation;
    this._callback = callback;
}

ArrayPro.prototype.push = function() {
    if (this._isLocked) {
        console.log('LOCKED!');
        return;
    }
    if (this._hasCallBack('push')) {
        this._callback.call(this, arguments[0], 'push');
    }
    return Array.prototype.push.apply(this, arguments);
};

ArrayPro.prototype.pop = function() {
    if (this._isLocked) {
        console.log('LOCKED!');
        return;
    }
    var result = Array.prototype.pop.apply(this, arguments);
    if (this._hasCallBack('pop')) {
        this._callback.call(this, result, 'pop');
    }
    return result;
};

var pro = new ArrayPro();
var pro1 = new ArrayPro();

pro.addCallBack('push', function(item, operation) {
    //store(item);
    console.log('Called' + ' ' + operation + ' with ' + item);
});

pro1.addCallBack('pop', function(item, operation) {
    //notify(item);
    console.log('Called' + ' ' + operation + ' with ' + item);
});

pro.push(2);
pro.push(4);
console.log(pro.toString());
pro.lock();
pro.push(2);
console.log(pro.toString());
pro.unlock();
pro.pop();
console.log(pro.toString());


pro.each(function(item) {
   console.log(item);
});

var items = [
    {
        type: 'IMAGE',
        duration: 3000, // in ms
        source: 'https://site.com/image/cat.png'
    },
    {
        type: 'VIDEO',
        duration: 5000, // in ms
        source: 'https://site.com/video/tratata.mp4'
    },
    {
        type: 'TWITTER',
        duration: 6000, // in ms
        source: 'https://twitter.com/twitter'
    } 
];

function BasePlayer(item) {
    this._contentItem = item;
    this._timerId = -1;
    this._stopCallBack = null;
}

BasePlayer.prototype.addStopCallback = function(callback) {
    this._stopCallBack = callback;
};

BasePlayer.prototype.play = function() {
    console.log(`Start play ${this._contentItem.type} ${this._contentItem.source}`);
    this._timerId = setTimeout(this.stop.bind(this), this._contentItem.duration);
};

BasePlayer.prototype.stop = function() {
    console.log(`Stop play ${this._contentItem.type} ${this._contentItem.source}`);
    clearTimeout(this._timerId);
    if (this._stopCallBack) {
        this._stopCallBack.call(this);   
    }
};

function ImagePlayer() {
    BasePlayer.apply(this, arguments);
    
    if (this._contentItem.type !== 'IMAGE') {
        throw new Error("Wrong item type");
    }
    
}
ImagePlayer.prototype = Object.create(BasePlayer.prototype);
ImagePlayer.prototype.constructor = ImagePlayer;

ImagePlayer.prototype.play = function() {
    console.log("Processing image");
    BasePlayer.prototype.play.apply(this, arguments);
};

ImagePlayer.prototype.stop = function() {
    console.log("Clearing image data");
    BasePlayer.prototype.stop.apply(this, arguments);
};




function TwitterPlayer() {
    BasePlayer.apply(this, arguments);
    if (this._contentItem.type !== 'TWITTER') {
        throw new Error("Wrong item type");
    }
}
TwitterPlayer.prototype = Object.create(BasePlayer.prototype);
TwitterPlayer.prototype.constructor = TwitterPlayer;
TwitterPlayer.prototype.play = function() {
    console.log("Open connection with twitter");
    BasePlayer.prototype.play.apply(this, arguments);
};

TwitterPlayer.prototype.stop = function() {
    console.log("Close twitter connections");
    BasePlayer.prototype.stop.apply(this, arguments);
};

function VideoPlayer() {
    BasePlayer.apply(this, arguments);
    if (this._contentItem.type !== 'VIDEO') {
        throw new Error("Wrong item type");
    }
}
VideoPlayer.prototype = Object.create(BasePlayer.prototype);
VideoPlayer.prototype.constructor = VideoPlayer;
VideoPlayer.prototype.play = function() {
    console.log("Buffering video");
    BasePlayer.prototype.play.apply(this, arguments);
};

VideoPlayer.prototype.stop = function() {
    console.log("Move vido to cache");
    BasePlayer.prototype.stop.apply(this, arguments);
};



function PlayerPro(items, mode) {
    this.items = items || [];
    this.mode = mode || 'MANUAL';
    this._currentItem = null;
    this.palyers = [];
    
    this._startPlay = function(item) {
        this._currentItem = item;
        var player = this._createPlayer(item);
        if ( this.mode === 'MANUAL') {
            this._playManual(player);
        }
    };
    
    this._playManual = function(player) {
        player.addStopCallback(function() {
                this._currentItem = null;
        });
        player.play();
    };
    
    this._createPlayer = function(item) {
        var PlayerConstructor = this.palyers[item.type];
        return new PlayerConstructor(item);
    };
}

PlayerPro.prototype.addItem = function(item) {
    this.items.push(item);
}

PlayerPro.prototype.startPlay = function(index) {
    var itemToPlay = index ? this.items[index] : this.items[0];
    if (itemToPlay) {
        this._startPlay(itemToPlay);
    }
}

PlayerPro.prototype.addPlayer = function(type, PlayerConstructor) {
    this.palyers[type] = PlayerConstructor;
}

var playerPro = new PlayerPro();

playerPro.addPlayer('IMAGE', ImagePlayer);
playerPro.addPlayer('VIDEO', VideoPlayer);
playerPro.addPlayer('TWITTER', TwitterPlayer);

playerPro.addItem(items[0]);
playerPro.addItem(items[1]);
playerPro.addItem(items[2]);

playerPro.startPlay();



/*playerPro.stop();
playerPro.mode = 'AROUND';
playerPro.play();
*/

