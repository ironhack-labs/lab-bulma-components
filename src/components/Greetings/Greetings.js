import React from 'react';

function Greetings ({lang, children}){
    if (lang === 'en'){
        return "Hello" + children
    }
    if (lang ==='fr'){
        return "Bonjour" + children
    }
    if (lang ==='de'){
        return "Halo" + children
    }
}

export default Greetings