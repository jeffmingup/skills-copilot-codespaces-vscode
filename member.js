function skillsMember() {
    const member = new Member();
    const memberSkills = new MemberSkills();

    memberSkills.getSkills(member.id)
        .then(skills => {
            member.skills = skills;
        });
}