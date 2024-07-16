class ContactClass {
    id: number
    name: string
    adress: string
    mail: string

    constructor(id: number, name: string, adress: string, mail: string) {
        this.name = name
        this.adress = adress
        this.mail = mail
        this.id = id
    }
    
}

export default ContactClass