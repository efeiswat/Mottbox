class Database:
    def __init__(self):
        self.users = {
            "efeiswat": {
                "password": "MOTBOX_BOSS_2026", # Şifren burada
                "rank": "OWNER",
                "coins": 9999999
            }
        }

    def login_check(self, u, p):
        return u in self.users and self.users[u]["password"] == p
      
