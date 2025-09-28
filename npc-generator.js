/**
 * ==========================================
 * NPC GENERATOR FOR HTML UI
 * 
 * Simple functions that work with the existing HTML
 * Generates NPCs and displays them cleanly
 * ==========================================
 */

function get_character_data(characterName) {
    // Find the character in the templates
    const character = NPC_TEMPLATES.characters.find(npc => npc.name === characterName);
    if (!character) {
        return null; // Character not found
    }

    // Return clean label-value pairs ready for UI
    return {
        "Name": character.name,
        "Race": character.race,
        "Profession": character.profession,
        "Age": character.age,
        "Alignment": character.alignment,
        "Origin": character.backstory_origin || character.origin,
        "Favorite People": character.favorite_people,
        "Secret": character.backstory_secret || character.secret,
        "Relationship": character.backstory_relationship || character.relationship,
        "Problem Solving": character.problem_solving_approach || character.motivation,
        "Personality": character.personality,
        "Quirk": character.quirk,
        "Physical Quirk": character.physical_quirk,
        "Dream": character.simple_dream,
        "Fear": character.common_fear,
        "Hobby": character.hobby,
        "Community Connection": character.community_connection
    };
}

function get_random_character() {
    const characters = NPC_TEMPLATES.characters;
    const randomIndex = Math.floor(Math.random() * characters.length);
    return get_character_data(characters[randomIndex].name);
}

// Main function called by HTML button
function generateNPC() {
    const characterData = get_random_character();
    if (!characterData) {
        document.getElementById('npc-display').innerHTML = '<p>Error: Could not generate NPC</p>';
        return;
    }
    displayNPC(characterData);
}

function displayNPC(characterData) {
    const displayDiv = document.getElementById('npc-display');
    
    // Create the HTML structure matching the CSS
    const html = `
        <div class="npc-card">
            <div class="npc-name">
                ${characterData.Name}
            </div>
            
            <div class="npc-basic-info">
                <div class="info-item">
                    <span class="info-label">Race</span>
                    <span class="info-value">${characterData.Race}</span>
                </div>
                
                <div class="info-item">
                    <span class="info-label">Profession</span>
                    <span class="info-value">${characterData.Profession}</span>
                </div>
                
                <div class="info-item">
                    <span class="info-label">Age</span>
                    <span class="info-value">${characterData.Age}</span>
                </div>
                
                <div class="info-item">
                    <span class="info-label">Alignment</span>
                    <span class="info-value">${characterData.Alignment}</span>
                </div>
            </div>
            
            <div class="backstory-section">
                <div class="backstory-title">
                    Character Details
                </div>
                
                <div class="backstory-content">
                    <div class="info-item">
                        <span class="info-label">Origin</span>
                        <span class="info-value">${characterData.Origin}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Favorite People</span>
                        <span class="info-value">${characterData["Favorite People"]}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Secret</span>
                        <span class="info-value">${characterData.Secret}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Relationship</span>
                        <span class="info-value">${characterData.Relationship}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Problem Solving</span>
                        <span class="info-value">${characterData["Problem Solving"]}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Personality</span>
                        <span class="info-value">${characterData.Personality}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Quirk</span>
                        <span class="info-value">${characterData.Quirk}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Physical Quirk</span>
                        <span class="info-value">${characterData["Physical Quirk"]}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Dream</span>
                        <span class="info-value">${characterData.Dream}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Fear</span>
                        <span class="info-value">${characterData.Fear}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Hobby</span>
                        <span class="info-value">${characterData.Hobby}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="info-label">Community Connection</span>
                        <span class="info-value">${characterData["Community Connection"]}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    displayDiv.innerHTML = html;
}

console.log("NPC Generator ready! Click the button to generate an NPC.");