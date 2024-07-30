const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';

    if (!isString) return;

    if (['work', 'home', 'personal'].includes(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
    if (!['true', 'false'].includes(isFavourite)) return;

    return isFavourite === 'true' ? true : false;
};

export const parseFilterParams = (query) => {
    const { type, isFavourite } = query;

    return {
        type: parseContactType(type),
        isFavourite: parseIsFavourite(isFavourite),
    };
};

