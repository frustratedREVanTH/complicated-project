class firstpage{
    constructor(){
     this.input=createInput("Name")
     this.button=createButton(" Get Started")
     this.title=createElement("h2")
    }
display (){
    this.title.html("Study organiser")
    this.title.position(575,0)
    this.button.position(625,400)
    this.input.position(575,200)
}

}