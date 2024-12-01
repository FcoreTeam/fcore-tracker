export class RegisterSystem{
    static async checkTypeRegister(data) {
        try {
            switch (data.type_reg) {
                case "self": return await RegisterSystem.reg_self(data); break;
                case "ip": return await RegisterSystem.reg_ip(data); break;
                case "ooo": return await RegisterSystem.reg_ooo(data); break;
                case "notregister": return await RegisterSystem.reg_notregister(data); break;
            }
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while checking type register'});        
        }
    }

    static async reg_self(data) {
        try {
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    static async reg_ip(data) {
        try {
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    static async reg_ooo(data) {
        try {

        } catch (err) {
            console.log(err);
        }
    }

    static async reg_notregister(data) {
        try {

        } catch (err) {
            console.log(err);
        }
    }
}