import os

import pymysql
import pymysql.cursors
from dotenv import load_dotenv

load_dotenv()


class connectionDb():

    @staticmethod
    def connect():
        db_host = "database"
        db_port = 3306
        db_user = "root"
        db_pass = "123456"
        db_db = "sistema_financeiro"

        mydb = pymysql.connect(host=db_host, port=int(
            db_port), user=db_user, passwd=db_pass, db=db_db)
        return mydb
