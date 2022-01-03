function createUserSession(req, user, action) {
    req.session.uid = user._id.toString();
    req.session.save(action); //action will executed only if session will save successfully

}

function destroyUserAuthSession(req)
{
    req.session.uid = null;
    
}

module.exports = {
    createUserSession: createUserSession, 
    destroyUserAuthSession: destroyUserAuthSession
}