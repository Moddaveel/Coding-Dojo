from flask_app.config.mysqlconnection import connectToMySQL

class Friend:
    def __init__(self, data):
        self.id = data["id"]

        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.occupation = data["occupation"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def all_friends(cls):
        query = "SELECT * FROM friends;"
        results = connectToMySQL("friend_schema").query_db(query)
        print( results)
        all_friends = []
        for friend in results:
            all_friends.append( cls (friend) )

        print(all_friends)
        return all_friends

    @classmethod
    def one_friend(cls, data):
        query = "SELECT * FROM friends WHERE id = %(id)s;"
        results = connectToMySQL("friend_schema").query_db(query, data)
        return cls(results[0])

    @classmethod
    def save_friend(cls, data):
        query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(occupation)s, NOW(), NOW());"
        new_id = connectToMySQL("friend_schema").query_db(query, data)
        return new_id
