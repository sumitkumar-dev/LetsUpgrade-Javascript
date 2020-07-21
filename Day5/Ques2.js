console.log("Ques 2")

class User {
    constructor (name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.upcoins = 0;
        this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

    addcoins(){
    this.upcoins ++;
    console.log(`${this.name} has ${this.upcoins} coins`);
    return this;
    
    }}

class Moderator extends User{
addCoin(user,coin){
    user.upcoins.push(coin);
    console.log(user);
        }
    }
    


class Admin extends Moderator {
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
}
    let user1= new User('Sumit',24,'sumit@gmail.com')
    user1.login().addcoins().addcoins()

    let user2= new User('Kumar',25,'kumar@gmail.com')
    user2.login().addcoins().addcoins().addcoins().addcoins()

    let mod = new Moderator('Sam',36,'sam@upgrade.com')

    let admin = new Admin('Rio',40,'rio@letsupgrade.com')

    let users = [user1,user2,mod,admin]

    

    users.forEach(element => {
       console.log(element);
    })

    admin.addCourse(user1,'javaScript')
    admin.addCourse(user1,'Python')

    mod.addCoin(user1,1)


