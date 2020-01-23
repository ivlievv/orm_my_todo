import { User, sequelize } from './db/models';
import moment from 'moment';
import { DataTypes, Model } from 'sequelize';


class Task extends Model {

}

Task.init({
            value: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                notEmpty: true,
              }
            },
            deadline: {
              type: DataTypes.DATE,
              allowNull: false,
              validate: {
                isDate: true,
                isAfter: moment().format('YYYY-MM-DD'),
              }
            },
            isDone: {
              type: DataTypes.BOOLEAN,
              defaultValue: false,
              allowNull: false
            }
          }, {
            sequelize,
          });

Task.belongsTo(User);
User.hasMany(Task);

Task.sync();