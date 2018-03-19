var KlongAPI = {};
var wordcut = require("wordcut");
wordcut.init();


KlongAPI.getGroup = function(word) {
    var Klong;

    // 1st-Seg
    word = wordcut.cut(word).split('|').pop();

    if (word.match(/^ฤกษ์$/)) {
        word = word.replace(/ฤกษ์/g, 'เลิก');
    } else if (word.match(/(.)ฤก$/)) {
        word = word.replace(/(ก|ต|ท|ป|ศ|ส)ฤ/g, 'ริ');
        word = word.replace(/(ค|น|พ|ม|ห)?ฤ/g, 'รึ');
    } else {
        word = word.replace(/(ก|ต|ท|ป|ศ|ส)ฤ/g, 'ริ');
        word = word.replace(/(ค|น|พ|ม|ห)?ฤ/g, 'รึ');
    }

    word = word.replace(/(ษมณ|ริย)์/g, '');
    word = word.replace(/(ทร|ทน|ตร|ติ|รติ|ดิ|ธิ|จน|ษณ|ธุ)์/g, '');
    word = word.replace(/(.)์/g, '');
    word = word.replace(/(่|้|๊|๋)/g, '');

    // 2nd-seg
    word = wordcut.cut(word).split('|').pop();

    if(!word) return null;
    if (word.length < 2) return null;

    
    ///////// SPECIAL
    if (word.match(/เวลา$/)) Klong = "อา";
    else if (word.match(/เพลา$/)) Klong = "เอา";
    else if (word.match(/เพ ลา$/)) Klong = "อา";
    else if (word.match(/โฉนด$/)) Klong = "โอด";
    else if (word.match(/ฤท$/)) Klong = "อิด";
    else if (word.match(/ฤณ$/)) Klong = "อิน";
    else if (word.match(/ฤต$/)) Klong = "อึด";
    else if (word.match(/เกสร$/)) Klong = "ออน";
    else if (word.match(/เมรุ$/)) Klong = "เอน";
    else if (word.match(/เหตุ$/)) Klong = "เอด";
    else if (word.match(/เกตุ$/)) Klong = "เอด";


    ///////////// เอาะ
    else if (word.match(/เ(.|..)าะ$/)) Klong = "เอาะ";
    ///////////// เอียะ
    else if (word.match(/เ(.|..)ียะ$/)) Klong = "เอียะ";
    ///////////// เอือะ
    else if (word.match(/เ(.|..)ือะ$/)) Klong = "เอือะ";
    ///////////// เออะ
    else if (word.match(/เ(.|..)อะ$/)) Klong = "เออะ";
    ///////////// อัวะ
    else if (word.match(/ัวะ$/)) Klong = "อัวะ";
    ///////////// เอา
    else if (word.match(/เ(.|..)า$/)) Klong = "เอา";

    ///////////// เอีย
    else if (word.match(/เ(.|..)ีย(ก|ข|ค|ฆ)$/)) Klong = "เอียก";
    else if (word.match(/เ(.|..)ีย(บ|ป|พ|ฟ|ภ)$/)) Klong = "เอียบ";
    else if (word.match(/เ(.|..)ีย(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "เอียด";
    else if (word.match(/เ(.|..)ีย(น|ณ|ร|ล|ญ)$/)) Klong = "เอียน";
    else if (word.match(/เ(.|..)ียม$/)) Klong = "เอียม";
    else if (word.match(/เ(.|..)ียว$/)) Klong = "เอียว";
    else if (word.match(/เ(.|..)ียง$/)) Klong = "เอียง";
    else if (word.match(/เ(.|..)ีย$/)) Klong = "เอีย";
    ///////////// เอือ
    else if (word.match(/เ(.|..)ือ(ก|ข|ค|ฆ)$/)) Klong = "เอือก";
    else if (word.match(/เ(.|..)ือ(บ|ป|พ|ฟ|ภ)$/)) Klong = "เอือบ";
    else if (word.match(/เ(.|..)ือ(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "เอือด";
    else if (word.match(/เ(.|..)ือ(น|ณ|ร|ล|ญ)$/)) Klong = "เอือน";
    else if (word.match(/เ(.|..)ือม$/)) Klong = "เอือม";
    else if (word.match(/เ(.|..)ือย$/)) Klong = "เอือย";
    else if (word.match(/เ(.|..)ือง$/)) Klong = "เอือง";
    else if (word.match(/เ(.|..)ือ$/)) Klong = "เอือ";

    ///////////// เออ
    else if (word.match(/เ(.)(ร|ล|ว)?อ$/)) Klong = "เออ";
    else if (word.match(/เ(.)(ร|ล|ว)?ิ(ก|ข|ค|ฆ)$/)) Klong = "เอิก";
    else if (word.match(/เ(.)(ร|ล|ว)?ิ(บ|ป|พ|ฟ|ภ)$/)) Klong = "เอิบ";
    else if (word.match(/เ(.)(ร|ล|ว)?ิ(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "เอิด";
    else if (word.match(/เ(.)(ร|ล|ว)?ิ(น|ณ|ร|ล|ญ)$/)) Klong = "เอิน";
    else if (word.match(/เ(.)(ร|ล|ว)?ิม$/)) Klong = "เอิม";
    else if (word.match(/เ(.)(ร|ล|ว)?ิง$/)) Klong = "เอิง";




    ///////////// เอะ
    else if (word.match(/เ(.|..)ะ$/)) Klong = "เอะ";
    else if (word.match(/เ(.|..)็(ก|ข|ค|ฆ)$/)) Klong = "เอ็ก";
    else if (word.match(/เ(.|..)็(บ|ป|พ|ฟ|ภ)$/)) Klong = "เอ็บ";
    else if (word.match(/เ(.|..)็(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "เอ็ด";
    else if (word.match(/เ(.|..)็(น|ณ|ร|ล|ญ)$/)) Klong = "เอ็น";
    else if (word.match(/เ(.|..)็ม$/)) Klong = "เอ็ม";
    else if (word.match(/เ(.|..)็ง$/)) Klong = "เอ็ง";


    //////////// แอ,แอะ

    else if (word.match(/แ(.)(ร|ล|ว)$/)) Klong = "แอ";
    else if (word.match(/แ(.)(ร|ล|ว)?(็)?(ก|ข|ค|ฆ)$/)) Klong = "แอก";
    else if (word.match(/แ(.)(ร|ล|ว)?(็)?(บ|ป|พ|ฟ|ภ)$/)) Klong = "แอบ";
    else if (word.match(/แ(.)(ร|ล|ว)?(็)?(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "แอด";
    else if (word.match(/แ(.)(ร|ล|ว)?(็)?(น|ณ|ร|ล|ญ)$/)) Klong = "แอน";
    else if (word.match(/แ(.)(ร|ล|ว)?(็)?ม$/)) Klong = "แอม";
    else if (word.match(/แ(.)(ร|ล|ว)?(็)?ว$/)) Klong = "แอว";
    else if (word.match(/แ(.)(ร|ล|ว)?(็)?ง$/)) Klong = "แอง";
    else if (word.match(/แ(.)(ร|ล|ว)?ะ$/)) Klong = "แอะ";
    else if (word.match(/แ(.)(ร|ล|ว)?$/)) Klong = "แอ";

    //////////// เอ

    else if (word.match(/เ(.|..)(ก|ข|ค|ฆ)$/)) Klong = "เอก";
    else if (word.match(/เ(.|..)(บ|ป|พ|ฟ|ภ)$/)) Klong = "เอบ";
    else if (word.match(/เ(.|..)(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "เอด";
    else if (word.match(/เ(.|..)(น|ณ|ร|ล|ญ)$/)) Klong = "เอน";
    else if (word.match(/เ(.|..)ม$/)) Klong = "เอม";
    else if (word.match(/เ(.|..)ย$/)) Klong = "เอย";
    else if (word.match(/เ(.|..)ว$/)) Klong = "เอว";
    else if (word.match(/เ(.|..)ง$/)) Klong = "เอง";
    else if (word.match(/เ(.|..)$/)) Klong = "เอ";
    //////////// โอะ Special	
    else if (word.match(/โ(.)(ร|ล|ว)?ะ$/)) Klong = "โอะ";
    ///////////// อัม
    else if (word.match(/ำ$/)) Klong = "อำ";

    ///////////// อะ
    else if (word.match(/ะ$/)) Klong = "อะ";
    else if (word.match(/(ั|รร)(ก|ข|ค|ฆ)$/)) Klong = "อัก";
    else if (word.match(/(ั|รร)(บ|ป|พ|ฟ|ภ)$/)) Klong = "อับ";
    else if (word.match(/(ั|รร)(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อัด";
    else if (word.match(/(ั|รร)(น|ณ|ร|ล|ญ)$/)) Klong = "อัน";
    else if (word.match(/(ั|รร)ม$/)) Klong = "อำ";
    else if (word.match(/(ั|รร)ว$/)) Klong = "อัว";
    else if (word.match(/(ั|รร)ง$/)) Klong = "อัง";

    ///////////// อา
    else if (word.match(/า$/)) Klong = "อา";
    else if (word.match(/า(ก|ข|ค|ฆ)$/)) Klong = "อาก";
    else if (word.match(/า(บ|ป|พ|ฟ|ภ)$/)) Klong = "อาบ";
    else if (word.match(/า(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อาด";
    else if (word.match(/า(น|ณ|ร|ล|ญ)$/)) Klong = "อาน";
    else if (word.match(/าม$/)) Klong = "อาม";
    else if (word.match(/าย$/)) Klong = "อาย";
    else if (word.match(/าว$/)) Klong = "อาว";
    else if (word.match(/าง$/)) Klong = "อาง";
    ///////////// อิ

    else if (word.match(/(ิ)(ก|ข|ค|ฆ)$/)) Klong = "อิก";
    else if (word.match(/ิ(บ|ป|พ|ฟ|ภ)$/)) Klong = "อิบ";
    else if (word.match(/ิ(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อิด";
    else if (word.match(/ิ(น|ณ|ร|ล|ญ)$/)) Klong = "อิน";
    else if (word.match(/ิม$/)) Klong = "อิม";
    else if (word.match(/ิว$/)) Klong = "อิว";
    else if (word.match(/ิง$/)) Klong = "อิง";
    else if (word.match(/ิ$/)) Klong = "อิ";
    ///////////// อี

    else if (word.match(/ี(ก|ข|ค|ฆ)$/)) Klong = "อีก";
    else if (word.match(/ี(บ|ป|พ|ฟ|ภ)$/)) Klong = "อีบ";
    else if (word.match(/ี(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อีด";
    else if (word.match(/ี(น|ณ|ร|ล|ญ)$/)) Klong = "อีน";
    else if (word.match(/ีม$/)) Klong = "อีม";
    else if (word.match(/ี$/)) Klong = "อี";
    ///////////// อุ

    else if (word.match(/ุ(ก|ข|ค|ฆ)$/)) Klong = "อุก";
    else if (word.match(/ุ(บ|ป|พ|ฟ|ภ)$/)) Klong = "อุบ";
    else if (word.match(/ุ(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อุด";
    else if (word.match(/ุ(น|ณ|ร|ล|ญ)$/)) Klong = "อุน";
    else if (word.match(/ุม$/)) Klong = "อุม";
    else if (word.match(/ุย$/)) Klong = "อุย";
    else if (word.match(/ุง$/)) Klong = "อุง";
    else if (word.match(/ุ$/)) Klong = "อุ";
    ///////////// อู

    else if (word.match(/ู(ก|ข|ค|ฆ)$/)) Klong = "อูก";
    else if (word.match(/ู(บ|ป|พ|ฟ|ภ)$/)) Klong = "อูบ";
    else if (word.match(/ู(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อูด";
    else if (word.match(/ู(น|ณ|ร|ล|ญ)$/)) Klong = "อูน";
    else if (word.match(/ูม$/)) Klong = "อูม";
    else if (word.match(/ูง$/)) Klong = "อูง";
    else if (word.match(/ู(ว)?$/)) Klong = "อู";
    ///////////// อึ

    else if (word.match(/ึ(ก|ข|ค|ฆ)$/)) Klong = "อึก";
    else if (word.match(/ึ(บ|ป|พ|ฟ|ภ)$/)) Klong = "อึบ";
    else if (word.match(/ึ(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อึด";
    else if (word.match(/ึ(น|ณ|ร|ล|ญ)$/)) Klong = "อึน";
    else if (word.match(/ึม$/)) Klong = "อึม";
    else if (word.match(/ึง$/)) Klong = "อึง";
    else if (word.match(/ึ$/)) Klong = "อึ";
    ///////////// อือ
    else if (word.match(/ือ$/)) Klong = "อือ";
    else if (word.match(/ื(บ|ป|พ|ฟ|ภ)$/)) Klong = "อืบ";
    else if (word.match(/ื(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อืด";
    else if (word.match(/ื(น|ณ|ร|ล|ญ)$/)) Klong = "อืน";
    else if (word.match(/ืม$/)) Klong = "อืม";
    ///////////// ลีอง
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))ว(ก|ข|ค|ฆ)$/)) Klong = "อก";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))ว(บ|ป|พ|ฟ|ภ)$/)) Klong = "อบ";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))ว(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อด";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))ว(น|ณ|ร|ล|ญ)$/)) Klong = "อน";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))วม$/)) Klong = "อม";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))วง$/)) Klong = "อง";
    ///////////// อัว
    else if (word.match(/(.)ว(ก|ข|ค|ฆ)$/)) Klong = "อวก";
    else if (word.match(/(.)ว(บ|ป|พ|ฟ|ภ)$/)) Klong = "อวบ";
    else if (word.match(/(.)ว(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อวด";
    else if (word.match(/(.)ว(น|ณ|ร|ล|ญ)$/)) Klong = "อวน";
    else if (word.match(/(.)วม$/)) Klong = "อวม";
    else if (word.match(/(.)วย$/)) Klong = "อวย";
    else if (word.match(/(.)วง$/)) Klong = "อวง";
    ///////////// โอ
    else if (word.match(/โ(.)(ร|ล|ว)?(ว)?$/)) Klong = "โอ";
    else if (word.match(/โ(.)(ร|ล|ว)?(ก|ข|ค|ฆ)$/)) Klong = "โอก";
    else if (word.match(/โ(.)(ร|ล|ว)?(บ|ป|พ|ฟ|ภ)$/)) Klong = "โอบ";
    else if (word.match(/โ(.)(ร|ล|ว)?(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "โอด";
    else if (word.match(/โ(.)(ร|ล|ว)?(น|ณ|ร|ล|ญ)$/)) Klong = "โอน";
    else if (word.match(/โ(.)(ร|ล|ว)?ม$/)) Klong = "โอม";
    else if (word.match(/โ(.)(ร|ล|ว)?ย$/)) Klong = "โอย";
    else if (word.match(/โ(.)(ร|ล|ว)?ง$/)) Klong = "โอง";

    ///////////// ลีอง
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))อ(ก|ข|ค|ฆ)$/)) Klong = "อก";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))อ(บ|ป|พ|ฟ|ภ)$/)) Klong = "อบ";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))อ(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อด";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))อ(น|ณ|ร|ล|ญ)$/)) Klong = "อน";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))อม$/)) Klong = "อม";
    else if (word.match(/((ิ|ี|ึ|ือ|ุ|ู|ั)(.)|(.)(ิ|ี|ึ|ือ|ุ|ู))อง$/)) Klong = "อง";

    ///////////// ออ


    else if (word.match(/อ$/)) Klong = "ออ";
    else if (word.match(/(.)อ(ก|ข|ค|ฆ)$/)) Klong = "ออก";
    else if (word.match(/(.)อ(บ|ป|พ|ฟ|ภ)$/)) Klong = "ออบ";
    else if (word.match(/(.)อ(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "ออด";
    else if (word.match(/(.)อ(น|ณ|ร|ล|ญ)$/)) Klong = "ออน";
    else if (word.match(/(.)อม$/)) Klong = "ออม";
    else if (word.match(/(.)อย$/)) Klong = "ออย";
    else if (word.match(/(.)อง$/)) Klong = "ออง";

    ///////////// ไอ ไอ อัย
    else if (word.match(/(ั|รร)ย$/)) Klong = "ไอ";
    else if (word.match(/ไ(.|..)$/)) Klong = "ไอ";
    else if (word.match(/ใ(.|..)$/)) Klong = "ไอ";

    ///////////// โอะ

    else if (word.match(/(ก|ข|ค|ฆ)$/)) Klong = "อก";
    else if (word.match(/(บ|ป|พ|ฟ|ภ)$/)) Klong = "อบ";
    else if (word.match(/(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อด";
    else if (word.match(/(น|ณ|ล|ญ)$/)) Klong = "อน";
    else if (word.match(/ม$/)) Klong = "อม";
    else if (word.match(/ง$/)) Klong = "อง";

    else if (word.match(/ร$/)) Klong = "ออน";

    else if (word.match(/^(อ|ย|ว)(ก|ข|ค|ฆ)$/)) Klong = "อก";
    else if (word.match(/^(อ|ย|ว)(บ|ป|พ|ฟ|ภ)$/)) Klong = "อบ";
    else if (word.match(/^(อ|ย|ว)(ด|จ|ฉ|ช|ซ|ฌ|ฎ|ฏ|ฐ|ฑ|ฒ|ต|ถ|ท|ธ|ศ|ษ|ส|ชร|ตร|ติ|รติ)$/)) Klong = "อด";
    else if (word.match(/^(อ|ย|ว)(น|ณ|ร|ล|ญ)$/)) Klong = "อน";
    else if (word.match(/^(อ|ย|ว)ม$/)) Klong = "อม";
    else if (word.match(/^(อ|ย|ว)ง$/)) Klong = "อง";

    else return null;

    return Klong;
}

module.exports = KlongAPI;