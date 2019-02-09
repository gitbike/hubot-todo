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
  robot.respond(/done (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send('完了にしました: ' + task);
  });
  robot.respond(/del (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send('削除しました: ' + task);
  });
  robot.respond(/list/i, (msg) => {
    if (todo.list().length === 0) {
      msg.send('(TODOはありません)');
    } else {
      msg.send(todo.list().join('\n'));
    }
  });
  robot.respond(/donelist/i, (msg) => {
    if (todo.donelist().length === 0) {
      msg.send('(完了したTODOはありません)');
    } else {
      msg.send(todo.donelist().join('\n'));
    }
  });
};
