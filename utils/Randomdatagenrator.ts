import { faker, Faker } from "@faker-js/faker";    
export class RandomData{
static getFirstName(){
    return faker.person.firstName();
}
static getLastName(){
    return faker.person.lastName();
}

static getEmail(){
    return faker.internet.email();
}

static getPhonenumber(){
    return faker.phone.number();
}
static getPassword(){
    return faker.internet.password();
}

}