function skillsMember() {
    this.member = [];
    this.add = function (name, skill, level) {
        this.member.push({ name: name, skill: skill, level: level });
    };
    this.find = function (name) {
        let result = this.member.filter(e => e.name === name);
        return result;
    };
    this.remove = function (name) {
        this.member = this.member.filter(e => e.name !== name);
    };
    this.update = function (name, skill, level) {
        let result = this.member.filter(e => e.name === name);
        result.forEach(e => {
            e.skill = skill;
            e.level = level;
        });
    };
    this.show = function () {
        return this.member;
    };
    this.sort = function () {
        this.member.sort((a, b) => {
            if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
            if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
            return 0;
        });
    };
    this.total = function () {
        let result = this.member.reduce((a, b) => {
            return a + b.level;
        }, 0);
        return result;
    };
    this.findSkill = function (skill) {
        let result = this.member.filter(e => e.skill === skill);
        return result;
    };
    this.findLevel = function (level) {
        let result = this.member.filter(e => e.level === level);
        return result;
    };
    this.findRange = function (min, max) {
        let result = this.member.filter(e => e.level >= min && e.level <= max);
        return result;
    };
    this.findName = function (name) {
        let result = this.member.filter(e => e.name.includes(name));
        return result;
    };
    this.findNameSkill = function (name, skill) {
        let result = this.member.filter(e => e.name.includes(name) && e.skill === skill);
        return result;
    };
    this.findNameLevel = function (name, level) {
        let result = this.member.filter(e => e.name.includes(name) && e.level === level);
        return result;
    };
    this.findSkillLevel = function (skill, level) {
        let result = this.member.filter(e => e.skill === skill && e.level === level);
        return result;
    };
    this.find