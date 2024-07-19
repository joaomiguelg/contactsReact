class ContactClass {
    id: number
    name: string
    tel: string
    mail: string

    constructor(id: number, name: string, tel: string, mail: string) {
        this.name = name
        this.tel = tel
        this.mail = mail
        this.id = id
    }
    
}

export default ContactClass