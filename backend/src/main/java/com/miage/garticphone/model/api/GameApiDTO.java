package com.miage.garticphone.model.api;

import com.miage.garticphone.model.bo.UserBO;

import java.util.ArrayList;
import java.util.UUID;

public class GameApiDTO {

    private static final Integer MAX_PLAYERS = 10;

    private UUID id;

    private UserApiDTO creator;

    private final ArrayList<UserApiDTO> users = new ArrayList<>();

    private boolean hasUser(UserApiDTO toCheck) {
        return users.contains(toCheck);
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getId() {
        return id;
    }

    public UserApiDTO getCreator() {
        return creator;
    }

    public void setCreator(UserApiDTO creator) {
        this.creator = creator;
    }

    public ArrayList<UserApiDTO> getUsers() {
        return users;
    }

    public boolean addUser(UserApiDTO toAdd) {
        if (!hasUser(toAdd) && users.size() < MAX_PLAYERS) {
            users.add(toAdd);
            return true;
        }

        return false;
    }

    public boolean removeUser(UserApiDTO toRemove) {
        if (hasUser(toRemove)) {
            users.remove(toRemove);
            return true;
        }

        return false;
    }

    public void setUsers(ArrayList<UserApiDTO> users) {
        for (UserApiDTO user : users) {
            addUser(user);
        }
    }
}
