class AdoptMotbox:
    def __init__(self, user):
        self.user = user

    def open_world(self):
        print("\n--- ADOPT MOTBOX DÜNYASI ---")
        print("Market ve Trade sistemi aktif.")
        action = input("1. Trade İsteği Gönder | 2. Envanter: ")
        if action == "1":
            target = input("Oyuncu ismi: ")
            print(f"{target} oyuncusuna takas isteği gönderildi (Petler listeleniyor...)")
          
