class BankAccount:

    instances = []

    def __init__(self, balance=0, interest_rate=0):
        self.balance = balance
        self.interest_rate = interest_rate
        BankAccount.instances.append(self)

    @classmethod
    def display(cls):
        #Prints insatnce in relation to location in memory
       print(cls.instances)
       # Prints first name of each instance
       for i in cls.instances:
             print(i.balance)

    def display_user_balance(self):
        return self

    def make_deposit(self, amount):
        self.balance += amount
        return self

    def make_withdrawal(self, amount):
        if(self.balance > amount):
            self.balance -= amount
        return self

    # def transfer_money(self, amount, other_user):
    #     self.balance -= amount
    #     other_user.balance += amount
    #     return self

    def interest(self):
        i = 0
        if(self.balance > 0):
            i = self.balance * self.interest_rate
            self.balance += i
        return self

class User:

    def __init__(self, first_name, last_name, email_address):
        self.first_name = first_name
        self.last_name = last_name
        self.email_address = email_address
        self.accounts = dict([])

    def addCheckingAccount(self, accountName, amount):
        self.accounts[accountName] = BankAccount(amount)
        return self

    def addSavingsAccount(self, accountName, amount):
        self.accounts[accountName] = BankAccount(amount)
        return self

    def addRothAccount(self, accountName, amount, interest_rate):
        self.accounts[accountName] = BankAccount(amount, interest_rate)
        return self

    def make_deposit(self, accountName, amount):
        self.accounts[accountName].make_deposit(amount)
        return self

    def make_withdrawal(self, accountName, amount):
        self.accounts[accountName].make_withdrawal(amount)
        return self

    # <!--- Still working on transferring ---!>
    # def transfer_money(self, accountName, amount):
    #     self.accounts[accountName].transfer_money(amount)
    #     return self

    def interest(self, accountName):
        self.accounts[accountName].interest()
        return self

    def display_user_balance(self, accountName):
        # self.accounts.display_user_balance(self.accounts[accountName])
        print(f'User: {self.first_name} Balance: {self.accounts[accountName].balance}')
        return self


David = User('David', 'Modd', 'dm@gmail.com')
Tanjiro = User('Tanjiro', 'The Goat', 'tg@gmail.com')

David.addCheckingAccount('Checking', 100)
David.addSavingsAccount('Savings', 500)
David.addRothAccount('Retirement', 5000, .05)

Tanjiro.addCheckingAccount('Checking', 200)
Tanjiro.addSavingsAccount('Savings', 600)
Tanjiro.addRothAccount('Retirement', 6000, .1)

David.display_user_balance('Checking')
David.display_user_balance('Savings')
David.display_user_balance('Retirement')
David.interest('Retirement')
David.display_user_balance('Retirement')

David.make_deposit('Checking', 500).make_withdrawal('Checking', 500)
David.display_user_balance('Checking')

BankAccount.display()

# still working on transferring
# David.transfer_money('Checking', 500)
# David.display_user_balance('checking')


#new note, who dis
