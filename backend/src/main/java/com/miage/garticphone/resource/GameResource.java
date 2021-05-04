package com.miage.garticphone.resource;

import com.miage.garticphone.model.api.GameApiDTO;
import com.miage.garticphone.model.api.UserApiDTO;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/games")
public class GameResource {

    @PostMapping
    @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    public GameApiDTO create(@RequestBody UserApiDTO creator) {
        // Should create a new game
        return null; // STUB
    }

    @GetMapping("/{id}")
    @SendTo("/game/{id}/update")
    @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    public GameApiDTO join(@PathVariable UUID id, @RequestBody UserApiDTO user) {
        // Subscribe user to the game websocket and emit to users than a new player come
        return null; // STUB
    }

    @DeleteMapping("/{id}")
    @SendTo("/game/{id}/update")
    @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    public GameApiDTO delete(@PathVariable UUID id, @RequestBody UserApiDTO creator) {
        // Delete the game and inform users
        return null; // STUB
    }

    // TODO: user leave game endpoint
}
