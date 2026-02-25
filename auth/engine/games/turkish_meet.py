class TurkishMeetGame:
    def __init__(self, user, rank):
        self.user = user
        self.rank = rank

    def start(self):
        print("\n--- TÜRK TANIŞMA DÜNYASI YÜKLENDİ ---")
        print("Harita: Çeşme, Okul, Bar, Park ve Obby aktif.")
        print(f"Karakter: {self.user} [{self.rank}]")
        print("Joystick ve Zıplama butonları ekranın köşelerine yerleştirildi.")
        self.chat_loop()

    def chat_loop(self):
        while True:
            msg = input("[Chat]: ")
            if msg == "/quit": break
            print(f"[{self.rank}] {self.user}: {msg}")
          
