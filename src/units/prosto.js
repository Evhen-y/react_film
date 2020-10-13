class  Animal  {
    constructor(name, voice) {
    this.name=name,
    this.voice=voice
    }
    say() {
        console.log(this.name, 'goes', this.voice )
}

}

class Bird extends Animal{
    constructor(name, dd) {
        super(name)
        super.say()
        this.dd=dd
    }

}
const duck = new Bird('ytka',true)
duck.say()