let candidates = [];

        function selectRole(role) {
            document.getElementById('roleSelection').style.display = 'none';

            if (role === 'admin') {
                document.getElementById('adminPanel').style.display = 'block';
            } else {
                document.getElementById('voterPanel').style.display = 'block';
                displayVotingList();
            }
        }

        function goBackToRoleSelection() {
            document.getElementById('roleSelection').style.display = 'block';
            document.getElementById('adminPanel').style.display = 'none';
            document.getElementById('voterPanel').style.display = 'none';
        }

        function showSection(section) {
            document.getElementById('addCandidate').style.display = 'none';
            document.getElementById('deleteCandidate').style.display = 'none';
            document.getElementById('viewCandidates').style.display = 'none';

            document.getElementById(section).style.display = 'block';

            if (section === 'deleteCandidate') {
                displayDeleteList();
            } else if (section === 'viewCandidates') {
                displayCandidateList();
            }
        }

        function addCandidate() {
            const name = document.getElementById('name').value;
            const mobile = document.getElementById('mobile').value;
            const email = document.getElementById('email').value;
            const dob = document.getElementById('dob').value;
            const age = document.getElementById('age').value;
            const address = document.getElementById('address').value;
            const city = document.getElementById('city').value;

            if (name && mobile && email && dob && age && address && city) {
                candidates.push({ name, mobile, email, dob, age, address, city, votes: 0 });
                alert('Candidate added successfully!');
                clearForm();
            } else {
                alert('Please fill all fields!');
            }
        }

        function clearForm() {
            document.getElementById('name').value = '';
            document.getElementById('mobile').value = '';
            document.getElementById('email').value = '';
            document.getElementById('dob').value = '';
            document.getElementById('age').value = '';
            document.getElementById('address').value = '';
            document.getElementById('city').value = '';
        }

        function displayDeleteList() {
            const deleteList = document.getElementById('deleteList');
            deleteList.innerHTML = '';

            candidates.forEach((candidate, index) => {
                const div = document.createElement('div');
                div.classList.add('candidate');
                div.innerHTML = `
                    <span>${candidate.name}</span>
                    <button onclick="deleteCandidate(${index})">Delete</button>
                `;
                deleteList.appendChild(div);
            });
        }

        function deleteCandidate(index) {
            candidates.splice(index, 1);
            alert('Candidate deleted successfully!');
            displayDeleteList();
        }

        function displayCandidateList() {
            const candidateList = document.getElementById('candidateList');
            candidateList.innerHTML = '';

            candidates.forEach(candidate => {
                const div = document.createElement('div');
                div.classList.add('candidate');
                div.innerHTML = `
                    <span>${candidate.name}</span>
                `;
                candidateList.appendChild(div);
            });
        }

        function displayVotingList() {
            const votingList = document.getElementById('votingList');
            votingList.innerHTML = '';

            candidates.forEach(candidate => {
                const div = document.createElement('div');
                div.classList.add('candidate');
                div.innerHTML = `
                    <span>${candidate.name}</span>
                    <button onclick="castVote('${candidate.name}')">Vote</button>
                `;
                votingList.appendChild(div);
            });
        }

        function castVote(candidateName) {
            const candidate = candidates.find(c => c.name === candidateName);
            if (candidate) {
                candidate.votes += 1;
                alert(`Your vote for ${candidateName} has been cast successfully!`);
            }
        }