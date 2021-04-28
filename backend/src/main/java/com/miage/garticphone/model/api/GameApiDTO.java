package com.miage.garticphone.model.api;

import java.util.ArrayList;
import java.util.UUID;

public class GameApiDTO {

    private UUID id;

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

    public ArrayList<UserApiDTO> getUsers() {
        return users;
    }

    public void addUser(UserApiDTO toAdd) {
        if (!hasUser(toAdd)) {
            users.add(toAdd);
        }
    }

    public void removeUser(UserApiDTO toRemove) {
        if (hasUser(toRemove)) {
            users.remove(toRemove);
        }
    }
}
