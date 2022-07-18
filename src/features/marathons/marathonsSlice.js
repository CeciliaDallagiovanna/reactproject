import { MARATHONS } from '../../app/shared/MARATHONS';

export const selectAllMarathons = () => {
    return MARATHONS;
};

export const selectMarathonById = (id) => {
    return MARATHONS.find((marathon) => marathon.id === parseInt(id));
};