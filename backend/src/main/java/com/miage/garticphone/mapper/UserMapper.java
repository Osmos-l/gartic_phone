package com.miage.garticphone.mapper;

import com.miage.garticphone.model.api.UserApiDTO;
import com.miage.garticphone.model.bo.UserBO;

public final class UserMapper {

    private UserMapper() {}

    public static UserBO toBo(UserApiDTO toTransform) {
        UserBO result = new UserBO();
        result.setId(toTransform.getId());
        result.setPseudo(toTransform.getPseudo());
        result.setPicture(toTransform.getPicture());

        return result;
    }

    public static UserApiDTO toApi(UserBO toTransform) {
        UserApiDTO result = new UserApiDTO();
        result.setId(toTransform.getId());
        result.setPseudo(toTransform.getPseudo());
        result.setPicture(toTransform.getPicture());

        return result;
    }
}
