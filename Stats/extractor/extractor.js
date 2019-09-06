const regex = /(\d+) members/gm;// /.{1,19}\s\s/gm;
const str = `Admin - its ur boi  1 members
Super Admin         3 members
Admin               6 members
Xenon               1 members
Dyno                1 members
MEE6                1 members
Gaius Bot           3 members
BulletBot           1 members
Birthday Mod        0 members
Moderator           14 members
YAGPDB.xyz          1 members
Bots                10 members
Hyper Active Member 7 members
Nitro Booster       10 members
Patreon             1 members
no reactions        2 members
Puzzle winner       1 members
Puzzle Solver       59 members
Yergos              2 members
fan-art-ist         19 members
Active 𝘅10⁹⁹       0 members
Very Active Member  43 members
Active Member       144 members
Programmer          2288 members
PHP                 203 members
PHP-Helper          51 members
Rust                39 members
Rust-Helper         15 members
Lua                 167 members
Lua-Helper          43 members
C-Lang              356 members
C-Helper            75 members
JS                  731 members
JS-Helper           133 members
C++                 660 members
C++-Helper          105 members
Java                861 members
Java-Helper         153 members
Python              1255 members
Python-Helper       210 members
C#                  600 members
C#-Helper           107 members
Tensorflow          64 members
PyTorch             31 members
Unity               143 members
Unreal              54 members
SQL                 187 members
NoSQL               73 members
Web-Design          141 members
Linux               400 members
OS X                204 members
Windows             2184 members
Chrome OS           66 members
General-Notif       796 members
YT-Notif            1491 members
Statbot             1 members
GaiusMute           3 members
Rythm               1 members
anime               181 members
Muted               4 members
self promote        804 members
no chat             2 members`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
		if(isNaN(match)) return;
        document.write(`${match}`);
		document.write("<br>");
    });
}