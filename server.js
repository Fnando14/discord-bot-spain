const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let today = new Date();
let prefix = config.prefix;
let args = "";
let insultos = ["autista", "comeme los huevos", "gilipollas", "hijo de puta", "catalufo", "catalan", "tonto", "cabron", "imbecil", "tus muertos", "putisima", "mierda", "pastanaga", "deforme", "maricon", "marica", "negro", "negra", "alcachofa", "perra", "puta", "hueles mal", "manco", "huevon"];
let respinsultos = ["abrazafarolas", "alcornoque", "alfeñique", "analfabeto", "bebecharcos", "baboso", "besugo", "bocabuzón", "bocachancla", "bocallanta", "cabezaalberca", "cabezabuque", "cagarrutas", "calientahielos", "calzamonas", "capullo", "Caracaballo", "caracartón", "caraculo", "caraflema", "carajaula", "carajote", "carapapa", "carapijo", "cazurro", "cebollino", "ceporro", "chiquilicuatre", "chupacables", "cierrabares", "comebolsas", "comechapas", "comeflores", "comestacas", "cuerpoescombro", "culopollo", "desgarracalzas", "Donnadie", "escornacabras", "fantoche", "gilipuertas",
    "giraesquinas", "gorrumino", "huelegateras", "huevon", "lamecharcos", "lameculos", "lameplatos", "lerdo", "lloramigas", "longanizas", "malasangre", "malasombra", "malparido", "mameluco", "mamporrero", "mascaglandes", "matacandiles", "melon", "mendrugo", "metemuertos", "morroestufa", "muerdesartenes", "ojete", "pagafantas", "palurdo", "papafrita", "papanatas", "paquete", "pardillo", "parguela", "pasmasuegras", "patan", "pedorroavitonto", "pedorro", "peinabombillas", "peinaovejas", "pelagallos", "pelagambas", "pelele", "perroflauta", "pichabrava", "pinchauvas", "pocasluces", "pollopera", "quitahipos", "rastrapajo", "rebañasandías", "revientabaules", "robaperas", "sacamuelas", "soplagaitas", "soplaguindas", "tragaldabas", "tolai", "tragasables", "tuercebotas", "tus padres no te quieren", "tus padres son hermanos", "zambombo", "zampabollos", "zopenco", "zoquete", "zurcefrenillos"
];

//Start
client.on("ready", () => {
    let server = client.guilds.size;
    let clients = client.users.size;
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("Arriba España!" + " Activo en " + server + " servers con " + clients + " users " + time);
    client.user.setActivity('esp help');
});

//Errors
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

//Messages
client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.includes("España")) {

        message.channel.send("Arriba España!");

    } else if (message.content.includes("Murcia")) {

        message.channel.send("Murcia no exite!");

    } else if (message.content.includes("arriba") || (message.content.includes("Arriba")) || (message.content.includes("ARRIBA"))) {

        message.channel.send("ESPAÑA!");

    } else if (message.content.startsWith("Buenas") || message.content.startsWith("buenas")) {

        message.channel.send("Noches");

    } else if (message.content.startsWith("Buenos") || message.content.startsWith("buenos")) {

        message.channel.send("Dias");

    } else if (message.content.startsWith("ESPAÑA")) {

        message.channel.send("VAMOOOOOOS!");

    } else if (message.content.startsWith("ESPAÑITA") || (message.content.startsWith("españita")) || (message.content.startsWith("Españita"))) {

        message.channel.send("España es GRANDEEEEEEE!");

    } else if (message.content.includes("Francia")) {

        message.channel.send("PUTOS GABACHOS");

    } else if (message.content.startsWith("españa")) {

        message.channel.send("España solo se puede escribir en GRANDE!");

    } else if (message.content.startsWith(prefix + " help")) {

        const embed = new Discord.RichEmbed()
            .setTitle("Comandos esp :flag_es:")
            .setColor(0xFF0000)
            .setDescription("himno, join, leave, pregunta, español, si, saiyan, trucu, arriba, domingo, vox, pp")
            .setFooter("Fnandu", client.user.avatarURL)
            .addField("Palabras españolas :flag_es:", "España, españa, ESPAÑA, españita, arriba, Buenas, Buenos, Francia, Murcia, Ayuwoki", true)
            .addField("Mencioname e insultame", "Y te digo un insulto español :flag_es:. Ej: @España gilipollas", true)

        message.channel.send({
            embed
        });

        //Join to channel
    } else if (message.content.startsWith(prefix + " join")) {
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | Conectado exitosamente.').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }

        //Leave of channel
    } else if (message.content.startsWith(prefix + " leave")) {
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz) {
            message.channel.send('No estoy en un canal de voz.');
        } else {
            message.channel.send('Dejando el canal de voz.').then(() => {
                Canalvoz.leave();
            }).catch(error => message.channel.send(error));
        }

        //Play himno de España
    } else if (message.content.startsWith(prefix + " himno")) {

        let numeros = Math.floor(Math.random() * 11);
        if (numeros === 0) {
            args = "https://www.youtube.com/watch?v=YeMhMTcQCRo";
        } else if (numeros === 1) {
            args = "https://www.youtube.com/watch?v=8Hj7wjdRdzw";
        } else {
            args = "https://www.youtube.com/watch?v=rHLs3AcZv1w";
        }

        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | Todos de pie para escuchar a vuestra españita').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);

        setTimeout(function() {
            Canalvoz.leave();
        }, 124000);

        //Play que si
    } else if (message.content.startsWith(prefix + " si")) {

        args = "https://www.youtube.com/watch?v=I6T4YGFuSA0";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | Te digo yo a ti QUE SI').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 7000);

        //Play se queda
    }else if (message.content.startsWith(prefix + " se queda")) {

        args = "https://youtu.be/OfdFL-5dip8";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | SE QUEDA').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 10000);

        //Play PP
    } else if (message.content.startsWith(prefix + " pp")) {

        args = "https://www.youtube.com/watch?v=Av5DYNPuQoQ";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | Best opening del anime').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 135000);

        //Play trucu
    } else if (message.content.startsWith(prefix + " trucu")) {

        args = "https://www.youtube.com/watch?v=poQ2NOwZfhI";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | pim pam TRUCU TRUCU').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 7000);

        //Play domingo
    } else if (message.content.startsWith(prefix + " domingo")) {

        args = "https://www.youtube.com/watch?v=MOpQeYd9zhg";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | Y ERA UN DOMINGO EN LA TARDE, FUI A LOS COCHES DE CHOQUE').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 12000);

        //Play saiyan
    } else if (message.content.startsWith(prefix + " saiyan")) {

        args = "https://www.youtube.com/watch?v=U-n4hWNewiE";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | Best rap español').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 130000);

        //Play VOX
    } else if (message.content.startsWith(prefix + " vox")) {

        args = "https://www.youtube.com/watch?v=Mkbp1wyKAx8";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | A VOX le pido').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 100000);

        //Play ayuwoki
    } else if (message.content.includes("ayuwoki") || message.content.includes("Ayuwoki") || message.content.includes("AYUWOKI")) {

        args = "https://www.youtube.com/watch?v=-F5L7pNlLQU";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | Modo Ayuwoki').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 7000);
    }
    //Porcentaje de español
    else if (message.content.startsWith(prefix + " español")) {

        let numeros = Math.floor(Math.random() * 103) - 1;
        let frase = "";
        if (numeros === -1) {
            frase = "Eres un catalán comunista";
        } else if (numeros === 0) {
            frase = "Eres catalán";
        } else if (numeros >= 1 && numeros <= 10) {
            frase = "Eres portugués";
        } else if (numeros >= 11 && numeros <= 20) {
            frase = "Eres de Ceuta o Melilla";
        } else if (numeros >= 21 && numeros <= 25) {
            frase = "Eres de Canarias";
        } else if (numeros >= 26 && numeros <= 30) {
            frase = "Eres valenciano";
        } else if (numeros >= 31 && numeros <= 40) {
            frase = "Eres un murciano";
        } else if (numeros >= 40 && numeros <= 60) {
            frase = "Eres un español normalito, nada especial";
        } else if (numeros >= 61 && numeros <= 70) {
            frase = "Pim pam toma lacasitos";
        } else if (numeros >= 71 && numeros <= 80) {
            frase = "El Rey es tu padre";
        } else if (numeros >= 81 && numeros <= 90) {
            frase = "Eres votante de VOX";
        } else if (numeros >= 91 && numeros <= 99) {
            frase = "Eres descendiente de Franco";
        } else if (numeros === 100) {
            frase = "En tu vida anterior eras Franco";
        } else {
            frase = "Eres el huevo perdido de Franco";
        }

        const embed = new Discord.RichEmbed()
            .setTitle(":flag_es:")
            .setColor(0xFF0000)
            .setDescription(message.member.user + " eres un " + numeros + "% español")
            .addField("Felicidades", frase, true)
        message.channel.send({
            embed
        });
    }

    //Preguntas a España
    else if (message.content.startsWith(prefix + " pregunta")) {

        var rpts = ["Con Franco eso no pasaba", "Me parece mejor que VOX", "Si", "No", "Vaya mierda de pregunta", "Eso preguntaselo a los catalufos", "GUAU"];
        message.channel.send(rpts[Math.floor(Math.random() * rpts.length)]);
    }

    //Insultos
    for (i = 0; i < insultos.length + respinsultos.length; i++) {
        if (message.content.includes(message.client.user) && message.content.includes(respinsultos[i])) {
            message.channel.send(message.member.user + " " + respinsultos[Math.floor(Math.random() * respinsultos.length)]);
        }
        if (message.content.includes(message.client.user) && message.content.includes(insultos[i])) {
            message.channel.send(message.member.user + " " + respinsultos[Math.floor(Math.random() * respinsultos.length)]);
        }
    }

        //Play arriba
    if (message.content.startsWith(prefix + " arriba")) {
        args = "https://www.youtube.com/watch?v=n171pxxF3Co&";
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
            message.channel.send('España entrando...').then(m => {
                Canalvoz.join().then(() => {
                    m.edit(':flag_es: | ARRIBA ESPAÑA').catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }
        //Enter sound
        const ytdl = require('ytdl-core');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return;
        Canalvoz.join()
            .then(connection => {
                const url = ytdl(args, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(url);
            })
            .catch(console.error);
        
        setTimeout(function() {
            Canalvoz.leave();
        }, 17000);
    }
});

client.login(config.token);