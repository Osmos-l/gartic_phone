package com.miage.garticphone.model.bo;

import java.util.ArrayList;
import java.util.UUID;

public class GameBO {

    private UUID id;

    private final ArrayList<UserBO> users = new ArrayList<>();

    private boolean hasUser(UserBO toCheck) {
        return users.contains(toCheck);
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getId() {
        return id;
    }

    public ArrayList<UserBO> getUsers() {
        return users;
    }

    public void addUser(UserBO toAdd) {
        if (!hasUser(toAdd)) {
            users.add(toAdd);
        }
    }

    public void removeUser(UserBO toRemove) {
        if (hasUser(toRemove)) {
            users.remove(toRemove);
        }
    }
}
