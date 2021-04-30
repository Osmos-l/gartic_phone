package com.miage.garticphone.mapper;

import com.miage.garticphone.model.api.GameApiDTO;
import com.miage.garticphone.model.api.UserApiDTO;
import com.miage.garticphone.model.bo.GameBO;
import com.miage.garticphone.model.bo.UserBO;

public final class GameMapper {

    private GameMapper() {}

    public static GameBO toBo(GameApiDTO toTransform) {
        GameBO result = new GameBO();

        if (toTransform == null) {
            return result;
        }

        result.setId(toTransform.getId());

        for (UserApiDTO user : toTransform.getUsers()) {
            result.addUser(UserMapper.toBo(user));
        }

        return result;
    }

    public static GameApiDTO toApi(GameBO toTransform) {
        GameApiDTO result = new GameApiDTO();

        if (toTransform == null) {
            return result;
        }

        result.setId(toTransform.getId());

        for (UserBO user : toTransform.getUsers()) {
            result.addUser(UserMapper.toApi(user));
        }

        return result;
    }
}
