import * as configApi from './config';

describe('when working with site config', function () {

    beforeEach(() => {
        configApi.setSiteConfig({});
    });

    it('should set reset config properly', function () {
        let config_0 = { foo: 'bar', bar: 0 };
        let config_1 = { foo: 'baf' };
        configApi.setSiteConfig(config_0);
        configApi.setConfig(config_1);
        let config_2 = configApi.getConfig();
        expect(config_2.foo).toEqual(config_1.foo);

        configApi.reset();

        let config_3 = configApi.getConfig();
        let config_4 = configApi.getSiteConfig();
        expect(config_3.foo).toEqual(config_0.foo);
        expect(config_4.foo).toEqual(config_0.foo);
    });
});

/*

You should assert on only one concept or capability per test.
This is often misinterpretted as meaning "only one assert statement" per test, but we
can be far gentler here.

In this example, we're testing that a library can "reset" it's configuration.
It clearly contains two "kinds" of configuration - a global "siteConfig" and a regular "config".

The ability to reset both of these values are individual features of the code and should be
split into separate tests.

*/