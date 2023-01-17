import {
    Table, Column, Model, PrimaryKey, DataType,
  } from 'sequelize-typescript';
  @Table({
    tableName: 'tasks',
    paranoid: true,
  })
  export default class Task extends Model {
    @PrimaryKey
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
      id: string;
    @Column({
      type: DataType.STRING,
    })
      title: string;
  }