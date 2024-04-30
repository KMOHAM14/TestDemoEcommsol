// eslint-disable-next-line import/prefer-default-export, no-shadow
export var ETimeout;
(function (ETimeout) {
    ETimeout[ETimeout["TIMEOUT_XXS"] = 2000] = "TIMEOUT_XXS";
    ETimeout[ETimeout["TIMEOUT_XS"] = 5000] = "TIMEOUT_XS";
    ETimeout[ETimeout["TIMEOUT_S"] = 10000] = "TIMEOUT_S";
    ETimeout[ETimeout["TIMEOUT_M"] = 20000] = "TIMEOUT_M";
    ETimeout[ETimeout["TIMEOUT_L"] = 30000] = "TIMEOUT_L";
    ETimeout[ETimeout["TIMEOUT_XL"] = 40000] = "TIMEOUT_XL";
    ETimeout[ETimeout["TIMEOUT_XXXL"] = 80000] = "TIMEOUT_XXXL";
    ETimeout[ETimeout["TIMEOUT_XXXXL"] = 300000] = "TIMEOUT_XXXXL";
})(ETimeout || (ETimeout = {}));
