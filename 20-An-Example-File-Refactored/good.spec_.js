import * as configApi from './config';

const validSiteConfig = { foo: 'bar', bar: 0 };

describe('when working with site config', function () {

    beforeEach(() => {
        configApi.setSiteConfig({});
    });

    it('setSiteConfig, should set config', function () {
        configApi.setSiteConfig(validSiteConfig);

        const config = configApi.getConfig();

        expect(config.foo).toEqual(validSiteConfig.foo);
    });

    it('setSiteConfig, should set site config', function () {
        configApi.setSiteConfig(validSiteConfig);

        const siteConfig = configApi.getSiteConfig();

        expect(siteConfig.foo).toEqual(validSiteConfig.foo);
    });

    it('setSiteConfig, should set site config and config to the same value', function () {
        configApi.setSiteConfig(validSiteConfig);

        const siteConfig = configApi.getSiteConfig();
        const config = configApi.getConfig();
        expect(siteConfig).toEqual(config);
    });

    it('updateCurrentConfig, should respect secure keys when applying directives', function () {
        const configUpdate = { foo: 'baf', bar: 'should-not-be-allowed' };
        const configWithSecureKeys = {
            foo: 'bar',
            bar: 'cant-be-changed',
            secure: [...configApi.defaultConfig.secure, 'bar'],
        };
        configApi.setSiteConfig(configWithSecureKeys);

        const updatedConfig = configApi.updateCurrentConfig(configWithSecureKeys, [configUpdate]);

        expect(updatedConfig.bar).toBe(configWithSecureKeys.bar);
    });

    it('reset, should set reset config to siteConfig', function () {
        configApi.setSiteConfig(validSiteConfig);
        configApi.setConfig({ foo: 'baf' });

        configApi.reset();

        const config = configApi.getConfig();
        expect(config.foo).toEqual(validSiteConfig.foo);
    });
});
