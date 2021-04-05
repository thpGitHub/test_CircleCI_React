import { afficheMessageCalculAir, calculAir, calculAirCarre, isAdmin } from './calculHelper';

//1er test
describe('test de la fonctionnalité afficheMessageCalculAir ', () => {
    test('tester le libellé avec des valeurs correctes pour calculAir', () => {
        expect(afficheMessageCalculAir(10, 10)).toContain(100);
    })
    test('tester le libellé avec des valeurs incorrectes pour calculAir', () => {
        expect(afficheMessageCalculAir(10, "toto")).toContain("l'air ne peut pas être calculée");
    })
    test('tester le libellé avec des valeurs vides pour calculAir', () => {
        expect(afficheMessageCalculAir()).toContain("l'air ne peut pas être calculée");
    })
})

//2eme test
describe('test de la fonctionnalité CalculAir ', () => {
    test('tester des valeurs pour calculAir', () => {
        expect(calculAir(10, 10)).toBe(100);
    })
    test('tester des valeurs pour calculAir', () => {
        expect(calculAir(10, 10)).toBeGreaterThan(0);
    })
    test('tester des valeurs pour calculAir', () => {
        expect(calculAir(10, 10)).toBeGreaterThanOrEqual(100);
    })
    test('tester des valeurs pour calculAir', () => {
        expect(calculAir(10, 10)).not.toBeNaN();
    })
})
//3eme test
describe('test de la fonctionnalité calculAirCarre ', () => {
    test('tester des valeurs pour calculAirCarre', () => {
        expect(calculAirCarre(10)).toBe(100);
    })
    test('tester des valeurs pour calculAirCarre', () => {
        expect(calculAirCarre(10)).toBeGreaterThan(0);
    })
})
//test error
describe('test de la fonctionnalité isAdmin ', () => {
    const userSimple = { role: 'guest' };
    const userAdmin  = { role: 'admin' };

    test('tester isAdmin avec user autre que admin', () => {
        // pour les erreurs il faut cather l'erreur dans une fonction intermédiaire
        function callIsAdmin() {
            isAdmin(userSimple);
        }
        expect(callIsAdmin).toThrowError('interdit');
    })
    test('tester isAdmin avec user admin', () => {
        expect(isAdmin(userAdmin)).toBeTruthy();
    })
})

// toMatchObject
const advancedPermission = {
    domaine: 'toto.com',
    level: 4,
    perms: {
        roles: ['guest', 'reader', 'reviewer'],
        delegated: true,
        method: 'oauth2'
    }
}
const advancedUser = {
    domaine: 'toto.com',
    level: 4,
    perms: {
        roles: ['guest', 'reader', 'reviewer'],
        delegated: true,
        method: expect.stringMatching('saml|oauth|oauth2')
    }
}

describe('test object avancé permission ', () => {
    test('teste de permission', () => {
        expect(advancedPermission).toMatchObject(advancedUser);
    })
})   

// toBeinstanceOf
class User {
    construtor(nom) {
        this.nom = nom;
    }
}

function auth(name) {
    if(typeof name === 'undefined') {
        throw new Error('le nom doit être defini')
    }
    return new User(name);
}

describe('test instance de class ', () => {
    test('tester instance de User', () => {
        expect(new User()).toBeInstanceOf(User);
    })
    test('tester instance de User', () => {
        expect(auth('titi')).toBeInstanceOf(User);
    })
    test('tester instance de User', () => {
        // pour les erreurs il faut cather l'erreur dans une fonction intermédiaire
        function callAuth() {
            auth();
        }
        expect(callAuth).toThrowError('le nom doit être defini');
    })
})   

//arrayContaining

function getRolesA() {
    return ['admin', 'guest'];
}
function getRolesB() {
    return ['admin', 'user'];
}

describe('test sur de array de roles ', () => {
    const attendu = ['admin', 'guest'];
    test('teste array same', () => {
        expect(getRolesA()).toEqual(expect.arrayContaining(attendu));
    })
    test('teste array array not same', () => {
        expect(getRolesB()).not.toEqual(expect.arrayContaining(attendu));
    })
})   

// Asynchrone avec les callbacks en utilsant done()

function fetchAPI(callback) {
    setTimeout(() => {
        callback("{api:ok}");
    },3000)
}

describe('test de  fetch API async ', () => {
        test('testee fetchAPI', (done) => {
            function callback(data) {
                try {
                    expect(data).toBe("{api:ok}");
                    done();
                } catch (error) {
                    done(error)                    ;
                }
            }
            fetchAPI(callback);
        })
})   

// Asynchrone avec les promises

function fetchApiPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("{api:ok}");
        },3000)
    })
}

test('test de promise', () => {
    return fetchApiPromise().then(data => {
        expect(data).toBe("{api:ok}");
    })
})

// Mock

function forEach(items, callback) {
    for(let i = 0; i<items.length; i++) {
        callback(items[i]);
    }
}

test('test de la fonction forEach avec mock', () => {
    const mockCallBack = jest.fn(x => 'salut '+ x);
    forEach(['toto', 'titi'], mockCallBack);

    expect(mockCallBack.mock.calls.length).toBe(2),
    expect(mockCallBack.mock.calls[0][0]).toBe('toto'),
    expect(mockCallBack.mock.calls[1][0]).toBe('titi'),
    expect(mockCallBack.mock.results[0].value).toBe('salut toto'),
    expect(mockCallBack.mock.results[1].value).toBe('salut titi')
})



