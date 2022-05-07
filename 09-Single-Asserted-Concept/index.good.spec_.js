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
        expect(config_3.foo).toEqual(config_0.foo);
    });

    it('site config should maintain initial value', function () {
        let config_0 = { foo: 'bar', bar: 0 };
        let config_1 = { foo: 'baf' };
        configApi.setSiteConfig(config_0);
        configApi.setConfig(config_1);
        let config_2 = configApi.getConfig();
        expect(config_2.foo).toEqual(config_1.foo);

        configApi.reset();

        let config_4 = configApi.getSiteConfig();
        expect(config_4.foo).toEqual(config_0.foo);
    });
});