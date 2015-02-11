# OwezoneMobile
This is mobile OFFLINE version of common expenses app OweZone.net 

<img src ="http://www.freelance-webexpert.fr/wp-content/uploads/2014/03/angularjs.png" width="100px"/>
<img src ="https://d1qb2nb5cznatu.cloudfront.net/startups/i/66850-ac2b465ba09878982c895a02ed7a5339-medium_jpg.jpg?buster=1392145966" width="80px"/>
<img src ="http://cordova.apache.org/images/cordova_256.png" width="100px"/> 

<img src ="https://raw.githubusercontent.com/kocasp/OwezoneMobile/master/screens.jpg"/>

## current version: Development (not functional)
TODO: handle the database (NOT window.localStorage!. JSON stringify is helpfull but force to update entire database)
Cordova SQLitePlugin is a good trace but plugin is not making the window.sqlitePlugin available from services scope so far.

### development notes
- https://blog.nraboy.com/2014/11/use-sqlite-instead-local-storage-ionic-framework/ provides informations about SQLitePlugin installation process 

- https://github.com/bgoetzmann/ionic-persistence also shows the template of SQLitePlugin AND PersistentJS usage with Ionic. (not investigated yet)

- adb logcat CordovaLog:D *:S lets log and filter cordova console.log into logcat console.

- WEBSql can be a plan B

- TODO: search how to reach variables and functions from Ionic view scope