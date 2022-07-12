import { createSelector } from "reselect";

export const getProfileSelector = (state) =>(state.ProfilePage.profile);

export const getSocialLinksSelector = (state) => (state.ProfilePage.social);

export const getLinks = createSelector(getSocialLinksSelector, (links)=>{
    links.filter(l=>true);
})

export const getMyIdSelector = (state) => (state.auth.id);