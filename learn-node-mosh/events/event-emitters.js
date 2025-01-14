const EventEmitter = require('events');

// 创建事件发射器实例
const emitter = new EventEmitter();

// 注册事件监听器
emitter.on('messageLogged', (arg) => {
    console.log('Listener called:', arg);
});

// 触发事件
emitter.emit('messageLogged', { id: 1, url: 'http://example.com' });
