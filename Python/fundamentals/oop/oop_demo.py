
class SuperHero: 


    population = 0

    def __init__ (self, name, ability, suit, health = 100, attack_power=10):
        self.name = name
        self.ability = ability
        self.suit = suit
        self.health = health
        self.attack_power = attack_power
        SuperHero.population += 1
        #nemesis
        #sidekick

    # Class Methods ------------------------------------------------
    @classmethod
    def printPopulus(cls):
        print(f"Super Hero population is currently: {SuperHero.population}")

    # Methods will be here

    # Let's introduce ourselves 
    def intro(self):
        print(f'Hi, my name is {self.name}, my super power is {self.ability} and I like wearing {self.suit}.')
        return self

    # Next Methods will be here
    def attack(self, target):
        if target.health < self.attack_power:
            print(f'{target.name} cannot be attacked.')
        else:
            target.health -= self.attack_power
        print(f"{self.name} is using {self.ability} to hurt {target.name}! {target.name}'s health is now {target.health}")
        return self

    def train(self, numOfDays):
        self.attack_power += (2 * numOfDays)
        print(f"{self.name} is training! Increased attack power to {self.attack_power}!")
        return self


# Make our stuff down here

super_hero1 = SuperHero('Jim', 'Making Slim Jims', 'Overalls', health=120)
super_hero2 = SuperHero('Felix', 'Code Breaking', 'Sweats', attack_power=20 )
super_hero3 = SuperHero('David', 'Flight', 'Gucci Suits', health=90, attack_power=30 )

super_hero1.intro()
super_hero2.attack(super_hero1)
super_hero1.train(5)
SuperHero.printPopulus()