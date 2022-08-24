module.exports = async function (context, req) {
    context.log('Triggered Managed API');
    
    context.res.json({
        text: "Hello from the Managed API"
    });
};
