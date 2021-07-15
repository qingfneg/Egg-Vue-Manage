// 'use strict';
// module.exports = app => {
//   const { STRING, INTEGER, DATE } = app.Sequelize;
//   const User = app.model.define('user', {
//     id: { type: INTEGER, primaryKey: true, autoIncrement: true },
//     name: STRING(30),
//     age: INTEGER,
//     created_at: DATE,
//     updated_at: DATE,
//   });
//   return User;
// };
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
@Table({
  modelName: 'user',
})
export class User extends Model<User> {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    comment: '用户ID',
  })
  id: number;

  @Column({
    type: DataType.STRING,
    comment: '用户姓名',
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    comment: '用户邮箱',
  })
  age: number;

  @Column({
    field: 'created_at',
  })
  createdAt: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt: Date;
}
export default () => User;
