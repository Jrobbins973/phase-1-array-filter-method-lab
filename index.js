// Code your solution here

const drivers = [
    {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
    {
    name: 'Sammy',
    hometown: 'New York' } ,
    {
    name: 'Sally',
    hometown: 'Cleveland' },
    {
    name: 'Annette',
    hometown: 'Los Angeles' },
    {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

const findMatching = (name) => {
    if (name === 'Bobby') {
        return name
    }
}
drivers.filter((driver) => {
    if (driver.name === 'Bobby') {
        return driver.name
    }
})

