const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Dano do Dragao

const damageDragon = () => {
  const minDamage = 15
  const maxDamage = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = maxDamage > minDamage ? maxDamage : minDamage;
  return dragonDmg
};

console.log(damageDragon());

// Dano do Warrior

const damageWarrior = () => {
   const minDamage = warrior.strength;
   const maxDamage = Math.floor(Math.random * (warrior.strength * warrior.warriorDmg));
   const warriorDmg = maxDamage > minDamage ? maxDamage : minDamage;
   return warriorDmg
};

console.log(damageWarrior());

const manaSpend = (mage) => {
  const mageMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = Math.floor(Math.random() * (mage.intelligence * 2));
  const costMana = 15
  const mageKit = {
    dmg: "Sem mana suficiente",
    manaSpent: 0,
  }

  if (mageMana > costMana) {
    const mageDmg = maxDamage > minDamage ? maxDamage : minDamage;
    mageKit.manaSpent = costMana;
    mage.mageKit.dmg = mageDmg;
    return manaSpend
  }
  return manaSpend
}
