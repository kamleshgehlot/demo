const env = 'local';

let DbName = 'test';


console.log('env...', env);

if (env === 'prod') {
  bName = '';
  domainName = '';
} 
else {  
  DbName = 'test'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };
