const parseContactType = (contactType) => {
    if (typeof contactType === 'string' && ['work', 'home', 'personal'].includes(contactType)) {
        return contactType;
    }
    return undefined;
};

const parseIsFavourite = (isFavourite) => {
    if (isFavourite === 'true') return true;
    if (isFavourite === 'false') return false;
    return undefined;
};

export const parseFilterParams = (query) => {
    const { contactType, isFavourite } = query;

    return {
        contactType: parseContactType(contactType),
        isFavourite: parseIsFavourite(isFavourite),
    };
};

