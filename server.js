const express = require( "express" );


const PORT = 6969;
const app = express();

app.get( "/", ( req, res ) =>
{
    res.send( "Good Day" );
} );

app.listen( PORT, () =>
{
    console.log( `Server is listening on port: ${ PORT }` );
} );