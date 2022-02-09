class BankAccount:

    instances = []

    def __init__(self, first_name, last_name, email_address, balance=0, int_rate=.05):
        self.first_name = first_name
        self.last_name = last_name
        self.email_address = email_address
        self.balance = balance
        self.int_rate = int_rate
        BankAccount.instances.append(self)

    @classmethod
    def display(cls):
        #Prints insatnce in relation to location in memory
       print(cls.instances)
       # Prints first name of each instance
       for i in cls.instances:
           print(i.first_name)

    def status(self):
        print(f'{self.first_name} {self.last_name} {self.email_address}')

    def account_balance(self):
        print(f'User: {self.first_name} Balance: {self.balance}')
        return self

    def deposit(self, amount):
        self.balance += amount
        print(f'User: {self.first_name} Balance: {self.balance}')
        return self

    def withdraw(self, amount):
        if(self.balance > amount):
            self.balance -= amount
        else:
            print(f"Sorry, {self.first_name} does not have the requested funds amount.")
        return self

    def transfer(self, amount, user):
        self.balance -= amount
        user.balance += amount
        print(f'User: {self.first_name} Balance: {self.balance}')
        return self

    def interest(self):
        x = 0
        if(self.balance > 0):
            x = self.balance * self.int_rate
            self.balance += x
            print(f'User: {self.first_name} Balance: {self.balance}')
        return self


batman = BankAccount('Bruce', 'Wayne', 'bw@gmail.com', 100000)
superman = BankAccount('Clark', 'Kent', 'ck@gmail.com', 20000 )
spiderman = BankAccount('Peter', 'Parker', 'pp@gmail.com', 3000)

superman.account_balance()
superman.deposit(1500).deposit(1500).deposit(1500).withdraw(1500).interest()
superman.account_balance()

batman.account_balance()
batman.deposit(1000).deposit(1000).withdraw(1000).withdraw(1000).withdraw(1000).withdraw(1000).interest()
batman.account_balance()

spiderman.account_balance()
batman.transfer(3000, spiderman)

spiderman.interest()
spiderman.account_balance()


batman.status()
BankAccount.display()