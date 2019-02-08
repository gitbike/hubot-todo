// Description:
//  TODOを管理することが出来るボットです。
// Commands:
//  ボット名 todo - TODOを作成
//  ボット名 done - TODOを完了にする
//  ボット名 del - TODOを消す
//  ボット名 list - TODOを一覧表示
//  ボット名 donelist - 完了したTODOの一覧表示

'use strict';

const todo = require('todo');
module.exports = (robot) => {
  robot.respond(/todo (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.todo(task);
    msg.send('追加しました: ' + task);
  });
};
